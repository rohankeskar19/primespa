-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 19, 2020 at 01:07 PM
-- Server version: 10.3.24-MariaDB-log-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saiinfot_primespa`
--

-- --------------------------------------------------------

--
-- Table structure for table `static_content`
--

CREATE TABLE `static_content` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `images` varchar(2000) DEFAULT NULL,
  `main_section` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `static_content`
--

INSERT INTO `static_content` (`id`, `name`, `title`, `description`, `images`, `main_section`) VALUES
(121, 'about', 'ABOUT PRIME SPA', '\ntt', '[\"/uploads/a89aa1d9-c4b6-414c-9946-c5de508e2467.jpeg\"]', 'true'),
(122, 'about', 'WELCOME TO MEDICAL SPA', 'The place for clients who desire non-surgical beauty solutions. Your face is our specialty. It’s our mission is to help you feel confident in your skin every day by combining the art and science of beauty to help you achieve the look you desire.  We provide top-of-the-line, physician-directed services and medical grade skin care products.   The services we provide use the latest technology, are non-invasive, and in most cases, you are able to return to work on the same day.   It’s not vain to want to look your best.  It means you are striving to be your very best, and we want to help you look as great as you feel.\n\n', '[]', 'false'),
(149, 'home', 'MAKE AN APPOINTMENT', 'OFFICE OPEN M-F / 9 AM - 5 PM', '[\"/uploads/b497da3a-9139-4f2b-b604-69711a951a9b.jpeg\",\"/uploads/865c626b-bd58-4317-a060-8255494a43d8.jpeg\"]', 'true'),
(150, 'home', 'WE ARE PRIME SPA', 'The place for clients who desire non-surgical beauty solutions. Your face is our specialty. It’s our mission is to help you feel confident in your skin every day by combining the art and science of beauty to help you achieve the look you desire.  We provide top-of-the-line, physician-directed services and medical grade skin care products.   The services we provide use the latest technology, are non-invasive, and in most cases, you are able to return to work on the same day.   It’s not vain to want to look your best.  It means you are striving to be your very best, and we want to help you look as great as you feel.\n\n', '[\"/uploads/ee6f4871-b8ff-4528-b077-e67dda39129a.jpeg\",\"/uploads/dc59009e-c797-4c61-a239-6ab16ab21cc7.jpeg\"]', 'false'),
(151, 'home', 'WE ARE PRIME SPA', 'The place for clients who desire non-surgical beauty solutions. Your face is our specialty. It’s our mission is to help you feel confident in your skin every day by combining the art and science of beauty to help you achieve the look you desire.  We provide top-of-the-line, physician-directed services and medical grade skin care products.   The services we provide use the latest technology, are non-invasive, and in most cases, you are able to return to work on the same day.   It’s not vain to want to look your best.  It means you are striving to be your very best, and we want to help you look as great as you feel.\n\n', '[\"/uploads/0edd2afe-6f9c-4eb1-ac15-e85a24590068.jpeg\"]', 'false'),
(162, 'products', 'PRODUCTS', ' .', '[\"/uploads/1435cc60-3aa2-4f11-bfec-a5c7bdafdcf6.jpeg\"]', 'true'),
(163, 'products', 'd', 'Products we feature at Prime are custom made just for your skin needs. We carry multiple lines to cater to every concern and skin condition you may have. Product lines we carry include: Prime Custom Skincare, Obagi, Revision, Elta MD (ONLY Elite Account in Oklahoma) , Latisse.\n', '[\"/uploads/0119d1fc-0130-414c-b2b8-ee69b6fe66ed.jpeg\"]', 'false'),
(232, 'services', 'SERVICES', 'We all desire clear, radiant skin. With numerous treatment options and a multitude of products available in the market, you are maybe left asking “What’s best for me?”\nTo help ease the confusion, we offer complimentary consultations to educate you about what’s going on with your skin and how we can best work to achieve your desired results.  Services include injectables, skin resurfacing, micro-needling, laser hair removal, acne treatments, and much more.\n\n', '[]', 'true'),
(233, 'services', 'SCITON NANOPEEL', 'recommended to treat fine lines, pores, and overall texture. This very light resurfacing offers no downtime or discomfort with immediate results. The procedure can be performed on a Friday and you can return to makeup and normal routine the following Monday.\n', '[]', 'false'),
(234, 'services', 'SCITON MICROLASERPEEL', 'A microlaserPeel removes the very outer layer of the skin to improve fine lines, pigmentation, tone, and texture- restoring a more youthful appearance. In contrast to our NanoPeel, this peel requires downtime and no makeup for 4-7 days.\n', '[]', 'false'),
(235, 'services', 'SCITON DEEP RESURFACING', 'Resurfacing with Contour TRL is a deep laser peel that safely removes deep wrinkles, especially those around lips and eyes. No other non-surgical technology can turn back time as effectively as Contour TRL.', '[]', 'false'),
(236, 'services', 'SCITON PROFRACTIONAL THERAPY', 'Profractional Therapy treats a fraction of the skin, stimulating new collagen growth and improving your skins tone, texture, fine lines, and acne scars. This treatment gives great results with minimal downtime.', '[]', 'false'),
(237, 'services', 'SCITON FOREVER YOUNG BBL – PHOTOFACIAL', 'Finally a treatment that can actually slow down the signs of aging and keep you forever young.   Forever Young BBL patients see improvement in full-face rejuvenation, skin texture and skin discolorations. Scientific evidence demonstrates regular maintenance treatments using Forever Young BBL rejuvenates skin and delays skin aging by restoring the gene expression pattern of aged human skin to resemble young skin.', '[]', 'false'),
(238, 'services', 'PRIME ACNE TREATMENTS', 'Acne problems can really affect your appearance and self-confidence.  Prime is directed by a board certified immunologist and allergist with a fellowship in dermatology who combines the latest in lasers, peels, and medical grade products to clear up acne and erase any scarring left behind. Your treatment provider will customize a treatment plan that will deliver the results you are looking for', '[]', 'false'),
(239, 'services', 'BBL LASER HAIR REMOVAL', 'At Prime we have the best and latest, pain-free laser hair removal system. Introducing BBL Laser Hair Removal to help you achieve permanent hair reduction. Depending on the treatment area, a session of laser hair removal can be as little as a few minutes or up to an hour of treatment. After each session, the hair in the treated area will appear finer and lighter.', '[]', 'false'),
(240, 'services', 'MICRONEEDLING', 'Micro-needling is an advanced, non-surgical procedure that can revitalize your skin from the effects of time. By using a handpiece with several very fine needles at the tip, this gentle treatment can correct the appearance of wrinkles, scarring, acne scars, and pigmentation among other skin inconsistencies. A member of our highly trained medical team will carefully maneuver this handpiece over the surface of the skin. As the micro-needles make contact, they will create tiny microchannels that help influence your body’s production of collagen and elastin, which are two key proteins that help keep our skin looking youthful and healthy. Once the production of these two proteins have begun, patients can feel the difference of silkier skin.', '[]', 'false'),
(241, 'services', 'PLATELET-RICH PLASMA (PRP)', 'Platelet-rich Plasma (PRP) is a substance derived from your own blood that can be used to trigger a healing response. Platelets contain several growth factors that attract stem cells and increase rebuilding of tissues over several months. PRP has recently become popular for healing sports injuries and for cosmetic procedures to increase collagen and improve overall skin health. Schedule a complimentary consultation for pricing', '[]', 'false'),
(242, 'services', 'THE ORGASM SHOT', 'The Orgasm Shot- also known as the O-Shot®, is a non-surgical, completely safe platelet-rich plasma technique to restore sexual health and urinary continence in women. Platelet Rich Plasma is obtained from your own blood and applied to the clitoris and vagina to stimulate multi-potent stem cells. This generates healthier tissue in the areas of sexual response and urinary continence, leading to improved health of the lubricating Skene’s Glands, urethra, and vaginal wall.', '[]', 'false'),
(243, 'services', 'KYBELLA', 'Kybella is the first and only FDA-approved, nonsurgical treatment that contours and improves the appearance of submental fullness (double chin). When injected into the fat beneath your chin, Kybella® causes the destruction of fat cells. Once destroyed, those cells cannot store or accumulate fat. Treatment is typically required 2-4 times in 7-10 week intervals, and the results are permanent.Schedule a complimentary consultation for pricing', '[]', 'false'),
(244, 'services', 'OZONE THERAPY', 'Ozone Therapy has been utilized and extensively studied for many decades. Ozone inactivates bacteria, viruses, fungi, yeast and protozoa. Ozone stimulates oxygen metabolism and activates the immune system. Ozone is utilized in our office to treat the following (*Individual results vary and are not guaranteed)', '[]', 'false'),
(245, 'services', 'BOTOX', 'Forehead wrinkles, crow’s feet and frown lines are no challenge for Botox Cosmetic. This treatment targets one of the most common underlying causes of wrinkles; repeated muscle contractions. When injected into the site of wrinkles and fine lines, BOTOX® Cosmetic temporarily relaxes the muscles there, smoothing and softening the skin above them. Most injection sessions take about 15 minutes to complete, and clients will typically see the results gradually kick in throughout the week. The full effects of Botox® take about 10 – 14 days. Results last anywhere from 3-6 months depending on the individual.', '[]', 'false'),
(246, 'services', 'DERMAL FILLER', 'Dermal Fillers are used in areas that have undergone volume loss such as the lips, cheeks, smile lines, and jaw line. These products are hyaluronic acid based which attracts water in the body to plump and fill these areas. As we age, our collagen levels decrease drastically, and dermal fillers provide a way to restore those youthful levels of collagen – turning back the hands of time. These products can last anywhere from a few months to a few years. At Prime Med Spa, we desire to help you achieve the exact result you want whether it’s subtle volume, or dramatic plumping. Upon evaluation, we will determine a treatment plan to give you optimum results.', '[]', 'false'),
(247, 'services', 'HYDRAFACIALS', 'THE AWARD-WINNING HYDRAFACIAL® ADVANCES SKIN HEALTH BY MERGING INVIGORATING SPA THERAPIES WITH ADVANCED MEDICAL TECHNOLOGY. THIS FACIAL TAKES NON-INVASIVE SKIN REJUVENATION TO A WHOLE NEW LEVEL. IN CLINICAL STUDIES PERFORMED BY LEADING U.S. DOCTORS, THE HYDRAFACIAL® WAS SHOWN TO PROVIDE BETTER RESULTS THAN MANY OTHER SKIN REJUVENATION DEVICES, AND IS THE ONLY HYDRADERMABRASION TREATMENT THAT USES THE PATENTED 4-IN-1 VORTEX TECHNOLOGY™. THE HYDRAFACIAL MD® PROPRIETARY SKIN SOLUTIONS ARE CLINICALLY FORMULATED USING ADVANCED INGREDIENTS TO TARGET SPECIFIC SKIN CONCERNS INCLUDING UNEVEN TONE AND TEXTURE, FINE LINES AND WRINKLES, BLEMISHES, AND DEHYDRATED SKIN.', '[]', 'false'),
(248, 'services', 'DERMAPLANE', 'DERMAPLANING IS A SIMPLE AND SAFE PROCEDURE FOR EXFOLIATING THE EPIDERMIS AND RIDDING THE SKIN OF FINE VELLUS HAIR OR PEACH FUZZ. THERE IS NO DOWNTIME AND GIVES YOU IMMEDIATE RESULTS. $35 PER FACIAL.', '[]', 'false'),
(249, 'services', 'WAXING', 'WAXING PROVIDES SMOOTH, SILKY, HAIR-FREE SKIN FOR A LONGER PERIOD OF TIME THAN SHAVING. WAXING ALSO DOES NOT CAUSE STUBBLE ASSOCIATED WITH SHAVING. THIS SYSTEM IS SELF-PRESERVING ANTI-BACTERIAL/ANTI-MICROBIAL SO IT’S SAFE, CLEAN AND GERM FREE. THE NEXT TIME YOU NEED A BROW OR LIP WAX, GIVE THIS A TRY. BROW WAX – $15 LIP WAX – $12', '[]', 'false'),
(250, 'services', 'MASSAGE THERAPY', 'Experience total relaxation or benefit from therapeutic bodywork for pain management. Depending on your needs, hot stone treatment, acupuncture, acupressure, or Chinese cupping are additional treatments you can add to get the most of your session. Massage times range from 30 minutes to 2 hours.Contact Connie Worden, LMT at 918-850-4286', '[]', 'false'),
(251, 'services', 'REDKEN SALON', 'Prime Medical Spa is home to Redken certified hair colorist and design stylist, Sarah Dean. She carries an extensive line of Redken and Pureology haircare products. With her extensive knowledge in Redken and Pureology haircare she can provide you with a perfectly personalized regimen.', '[]', 'false'),
(252, 'services', 'HAIR LOSS RESTORATION', 'WHERE SCIENCE, TECHNOLOGY & RESULTS MEET. Hair loss restoration services at Prime are provided by Hair Loss Restoration Co. OUR VISION To be an information source and provide services for clients experiencing hair loss, helping them obtain the best decision regarding their goals and expectations for hair health and regrowth. SERVICES Initial comprehensive analysis. Hair wear for those who want an instant solution for thinning hair. Laser hair therapy. The best products on the market for your hair loss needs; compounding prescriptions available. Plasma rich platelet (PRP) therapy. On-Site immunologist, dermatologist, allergist, IV nutrition therapy. Follow-up analysis and scope. For appointments and pricing, contact Kellie August phone- 918-605-5377 www.hairlossrestorationco.com', '[]', 'false'),
(253, 'services', 'PERMANENT COSMETICS', 'Permanent Cosmetics can enhance your brows, eyes and lips with results that last! Save time on your daily beauty routine and look your best morning, noon and night. It is especially beneficial for people who can’t wear cosmetics due to allergies and sensitive skin, active people who don’t want to worry about sweating off and reapplying cosmetics, and those who are visually impaired and have difficulty applying cosmetics. 3D Aereola Pigmentation: *COMING SOON* Women who have undergone mastectomies, other breast surgery or are simply not happy with their areola may elect to have permanent re-pigmentation of the breast. Techniques such as permanent areola re-pigmentation and nipple restoration employs cosmetically tattooed micro pigmentation as a way to restore the natural beauty of your breasts. Schedule a complimentary consultation for pricing with either Karen Barnett or Tammy Mathias. Karen Barnett, RDH, CMM Microblading & Permanent Makeup Artist Cell: 918-230-8862 Facebook link: /skindeepabrowstul Instagram link: /skindeepabrowstul www.skindeepbrows.com Tammy Mathias, RDH, CMM Permanent Cosmetic Artist Cell: 918-606-3664', '[]', 'false'),
(264, 'events', 'MASSAGE THERAPY', 'Experience total relaxation or benefit from therapeutic bodywork for pain management.  Depending on your needs, hot stone treatment, acupuncture, acupressure, or Chinese cupping are additional treatments you can add to get the most of your session.  Massage times range from 30 minutes to 2 hours.\n<br>\nContact Connie Worden, LMT at 918-850-4286\n<ul><li>test</li></ul>', '[]', 'false'),
(265, 'events', 'REDKEN SALON', 'Prime Medical Spa is home to Redken certified hair colorist and design stylist, Sarah Dean. She carries an extensive line of Redken and Pureology haircare products.  With her extensive knowledge in Redken and Pureology haircare she can provide you with a perfectly personalized regimen.', '[]', 'false'),
(266, 'events', 'HAIR LOSS RESTORATION WHERE SCIENCE, TECHNOLOGY & RESULTS MEET.', 'Hair loss restoration services at Prime are provided by Hair Loss Restoration Co.\n\nOUR VISION\nTo be an information source and provide services for clients experiencing hair loss, helping them obtain the best decision regarding their goals and expectations for hair health and regrowth.\n\nSERVICES\n        1. Initial comprehensive analysis.\n        2. Hair wear for those who want an instant solution for thinning hair.\n       3. Laser hair therapy.\n       4. The best products on the market for your hair loss needs; compounding prescriptions available.\n       5. Plasma rich platelet (PRP) therapy.\n       6. On-Site immunologist, dermatologist, allergist, IV nutrition therapy.\n       7. Follow-up analysis and scope.\n\nFor appointments and pricing, contact Kellie August phone- 918-605-5377\n\nwww.hairlossrestorationco.com', '[]', 'false'),
(267, 'events', 'PERMANENT COSMETICS', 'Permanent Cosmetics can enhance your brows, eyes and lips with results that last!  Save time on your daily beauty routine and look your best morning, noon and night.  It is especially beneficial for people who can’t wear cosmetics due to allergies and sensitive skin, active people who don’t want to worry about sweating off and reapplying cosmetics, and those who are visually impaired and have difficulty applying cosmetics. \n\n3D Aereola Pigmentation: *COMING SOON* Women who have undergone mastectomies, other breast surgery, or are simply not happy with their areola may elect to have permanent re-pigmentation of the breast. Techniques such as permanent areola re-pigmentation and nipple restoration employs cosmetically tattooed micro pigmentation as a way to restore the natural beauty of your breasts.\n\nSchedule a complimentary consultation for pricing with either Karen Barnett or Tammy Mathias.\n\nKaren Barnett, RDH, CMM Microblading & Permanent Makeup Artist\nCell: 918-230-8862\nFacebook link: /skindeepabrowstul\nInstagram link: /skindeepabrowstul\nwww.skindeepbrows.com\n\nTammy Mathias, RDH, CMM Permanent Cosmetic Artist Cell: 918-606-3664', '[]', 'false'),
(268, 'events', 'MARISSA – NEW LASH TECH/ESTHETICIAN', 'MARISSA – NEW LASH TECH/ESTHETICIAN', '[]', 'false'),
(269, 'primemen', 'COMING SOONssss', 'diiiiiiii', '[]', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`) VALUES
('admin@primespa.com', '$2a$10$07p7E5mgAgtwuyND3cnvLu.H0cH2LmuuAYFAUTeOFbSDGCxC4.Yfi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `static_content`
--
ALTER TABLE `static_content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `static_content`
--
ALTER TABLE `static_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=270;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
