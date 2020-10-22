const pool = require("../helpers/mysql");
const imageUpload = require("../helpers/image-upload");

const addStaticContent = async (req, res) => {
    try {
        const {name, sections} = req.body;
        if(!(name && sections)) {
            return res.status(400).json({ error: "Bad Request" });
        }
        /* let sectionsArr = sections.map(async (obj) => {
            let filesArr = await imageUpload(obj.images, name);
            console.log('filesArr =>', filesArr);
            return [name, obj.title, obj.description, JSON.stringify(filesArr), obj.mainSection? 'true' : 'false'];
        }); */
        let sectionsArr = await Promise.all(sections.map(async (obj) => {
            let filesArr = [];
            if(obj.images.length)
                filesArr = await imageUpload(obj.images, name);
            
            return [name.toLowerCase(), obj.title, obj.description, JSON.stringify(filesArr), obj.mainSection? 'true' : 'false'];
        }));
        pool.getConnection(async (err, con) => {
            if (err) {
                console.log(err);
                
                return res
                  .status(500)
                  .json({ error: "Failed to process request try again" });
              } else {
                con.query(
                `DELETE FROM static_content where name="${name}";INSERT INTO static_content(name, title, description, images, main_section) VALUES ?`, [sectionsArr],
                (err, result) => {
                    con.release();
                    if (err) {
                        console.log(err);
                        return res
                        .status(500)
                        .json({ error: "Failed to process request try again" });
                    } else {
                        return res.json({message: "Content saved successfully"});
                    }
                })
              }
        });
    } catch(err) {
        console.log('err in catch => ', err);
        return res.status(500).json({ error: "Failed to process request try again" });
    }
}

const getStaticContent = (req, res) => {
    try {
        if(!req.query.name) {
            return res.status(400).json({ error: "Bad Request" });
        } else {
            pool.getConnection(async (err, con) => {
                if (err) {
                    
                    console.log(err);
                    return res.status(500).json({ error: "Failed to process request try again" });
                  } else {
                    con.query(
                    `SELECT * FROM static_content where name="${req.query.name}";`,
                    (err, result) => {
                        con.release();
                        if (err) {
                            console.log(err);
                            return res.status(500).json({ error: "Failed to process request try again" });
                        } else {
                            // console.log('result =>', result);
                            let contentArr = result.map(obj => {
                                obj.images = JSON.parse(obj.images);
                                return obj;
                            })
                            return res.json({ data: contentArr, message: "Content fetched successfully" });
                        }
                    })
                  }
            });
        }
    } catch(err) {
        console.log('err in catch => ', err);
        return res.status(500).json({ error: "Failed to process request try again" });
    }
}

module.exports = {
    addStaticContent,
    getStaticContent
}