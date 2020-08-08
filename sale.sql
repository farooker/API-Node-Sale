-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2020 at 12:09 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sale`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_brand`
--

CREATE TABLE `tbl_brand` (
  `B_id` bigint(20) NOT NULL,
  `B_Brand` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_brand`
--

INSERT INTO `tbl_brand` (`B_id`, `B_Brand`) VALUES
(16, 'Adidas'),
(18, 'New balance'),
(22, 'Reebok'),
(23, ' Puma');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `orderID` varchar(50) COLLATE utf8_bin NOT NULL,
  `orderDate` date NOT NULL,
  `orderTotal` int(11) NOT NULL,
  `orderUser` int(11) NOT NULL,
  `transaction` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`orderID`, `orderDate`, `orderTotal`, `orderUser`, `transaction`) VALUES
('2020071305159459466993049930', '2020-07-13', 3300, 2020697478, 'trxn_test_5kipx1undwkpp61hvx9'),
('2020071306159459723948339483', '2020-07-13', 3500, 2020697478, 'trxn_test_5kiq9gek1edytcz4jxy'),
('2020071306159459749146851468', '2020-07-13', 3500, 2020697478, 'trxn_test_5kiqats67wk183frohs'),
('2020071307159460057669216692', '2020-07-13', 3500, 2020697478, 'trxn_test_5kiqsxf81700tg4lp22'),
('2020071308159460450844448444', '2020-07-13', 3000, 2020697478, 'trxn_test_5kirg1qxgltcm2ql96h'),
('2020071806159502728066800668', '2020-07-18', 7000, 2020697478, 'null'),
('2020071815159506034881808818', '2020-07-18', 3500, 2020697478, 'trxn_test_5kktr5hxyuz0h2n6g52'),
('202007181515950605050184518', '2020-07-18', 3800, 2020697478, 'trxn_test_5kktrijixu3vlsd3z2f'),
('2020071815159506131654916549', '2020-07-18', 3800, 2020697478, 'trxn_test_5kktw17epqv2ihxunfi'),
('2020071815159506141161651616', '2020-07-18', 3500, 2020697478, 'trxn_test_5kktwk26t7y9duuyn44'),
('2020071815159506152421844218', '2020-07-18', 3300, 2020697478, 'trxn_test_5kktx8jc1pmetwzdbil'),
('202007181515950615440310431', '2020-07-18', 3500, 2020697478, 'trxn_test_5kktxr73iuhgw0jm8m1'),
('2020071815159506179861718617', '2020-07-18', 3500, 2020697478, 'trxn_test_5kktyw028ylx65crews'),
('2020071815159506184124101241', '2020-07-18', 3500, 2020697478, 'trxn_test_5kktzs01oun76msy7p9'),
('2020071817159506905369813698', '2020-07-18', 3500, 2020697479, 'trxn_test_5kkv5n3936k1jlcua2w');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orderlist`
--

CREATE TABLE `tbl_orderlist` (
  `orderDID` int(11) NOT NULL,
  `orderDProduct` int(11) NOT NULL,
  `orderDPrice` int(11) NOT NULL,
  `orderDAmount` int(11) NOT NULL,
  `orderID` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_orderlist`
--

INSERT INTO `tbl_orderlist` (`orderDID`, `orderDProduct`, `orderDPrice`, `orderDAmount`, `orderID`) VALUES
(13, 13, 300, 1, '2020071305159459466993049930'),
(14, 18, 3000, 1, '2020071305159459466993049930'),
(15, 18, 3000, 1, '2020071306159459723948339483'),
(16, 22, 500, 1, '2020071306159459723948339483'),
(17, 22, 500, 1, '2020071306159459749146851468'),
(18, 18, 3000, 1, '2020071306159459749146851468'),
(19, 22, 500, 1, '2020071307159460057669216692'),
(20, 18, 3000, 1, '2020071307159460057669216692'),
(21, 18, 3000, 1, '2020071308159460450844448444'),
(22, 18, 3000, 1, '2020071806159502728066800668'),
(23, 18, 3000, 1, '2020071806159502728066800668'),
(24, 22, 500, 1, '2020071806159502728066800668'),
(25, 22, 500, 1, '2020071806159502728066800668'),
(26, 18, 3000, 1, 'undefined'),
(27, 13, 300, 1, 'undefined'),
(28, 22, 500, 1, 'undefined'),
(29, 22, 500, 1, 'undefined'),
(30, 13, 300, 1, 'undefined'),
(31, 18, 3000, 1, 'undefined'),
(32, 18, 3000, 1, 'undefined'),
(33, 22, 500, 1, 'undefined'),
(34, 13, 300, 1, 'undefined'),
(35, 18, 3000, 1, 'undefined'),
(36, 22, 500, 1, '202007181515950615440310431'),
(37, 18, 3000, 1, '202007181515950615440310431'),
(38, 18, 3000, 1, '2020071815159506179861718617'),
(39, 22, 500, 1, '2020071815159506179861718617'),
(40, 18, 3000, 1, 'undefined'),
(41, 22, 500, 1, 'undefined'),
(42, 18, 3000, 1, 'undefined'),
(43, 22, 500, 1, 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `PRD_id` int(11) NOT NULL,
  `PRD_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `PRD_price` int(11) NOT NULL,
  `PRD_Brand` int(11) NOT NULL,
  `PRD_img` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`PRD_id`, `PRD_name`, `PRD_price`, `PRD_Brand`, `PRD_img`) VALUES
(1, 'tttt', 300, 2, 'images/image-1593985612214.png'),
(2, 'bbbb', 50, 2, ''),
(10, 'test', 300, 2, '่่่่่้้gg.jpg'),
(11, 'test', 300, 2, '่่่่่้้gg.jpg'),
(12, 'undefined', 0, 0, 'undefined'),
(15, 'undefined', 0, 0, 'undefined'),
(16, 'undefined', 0, 0, 'undefined'),
(17, 'undefined', 0, 0, 'undefined'),
(23, 'Nike Air Zoom BB NXT', 6400, 1, 'images/image-1595338150228.jpg'),
(24, 'Nike Air Force 1 07', 3500, 1, 'images/image-1595338219122.jpg'),
(25, 'Nike Air Max 90', 4600, 1, 'images/image-1595338268347.jpg'),
(26, 'FLUIDFLOW', 2700, 16, 'images/image-1595338485096.jpg'),
(27, 'รองเท้า DURAMO 9', 2000, 16, 'images/image-1595338543931.jpg'),
(28, 'รองเท้า SUPERNOVA', 3400, 16, 'images/image-1595338669774.jpg'),
(29, 'NEW BALANCE 420 V1 2E ', 1180, 18, 'images/image-1595339126427.'),
(30, 'NEW BALANCE Fresh Foam Roav', 2290, 18, 'images/image-1595339190294.'),
(31, ' New Balance 574 ', 1315, 18, 'images/image-1595339266519.'),
(32, 'LQD CELL EXTOL ARCHIVE', 3999, 23, 'images/image-1595339498487.jpg'),
(33, 'RALPH SAMPSON MC', 3999, 23, 'images/image-1595339551758.jpg'),
(34, 'รุ่น RS-2K INTERNET EXPLORING', 4999, 23, 'images/image-1595339634040.jpg'),
(35, 'REEBOK FLEXAXGON FIT', 2400, 22, 'images/image-1595339793434.jpg'),
(36, 'REALFLEX TRAIN 5.0', 2990, 22, 'images/image-1595339849869.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `userID` int(100) NOT NULL,
  `userNickName` varchar(255) COLLATE utf8_bin NOT NULL,
  `userEmail` varchar(255) COLLATE utf8_bin NOT NULL,
  `userPassword` varchar(255) COLLATE utf8_bin NOT NULL,
  `userAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`userID`, `userNickName`, `userEmail`, `userPassword`, `userAdmin`) VALUES
(2020697478, 'Farook', 'admin@hotmail.com', '123', 1),
(2020697479, 'dd', 'farook', '123', 0),
(2020697481, 'sdsd', 'sdsd', 'sdsd', 0),
(2020697482, 'sdsd', 'sdsd', 'sdsd', 0),
(2020697483, 'sdsd', 'sdsd', 'sdsd', 0),
(2020697484, 'sdsd', 'sdsd', 'sdsd', 0),
(2020697485, 'sdsd', 'sdsd', 'sdsd', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_brand`
--
ALTER TABLE `tbl_brand`
  ADD PRIMARY KEY (`B_id`);

--
-- Indexes for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `tbl_orderlist`
--
ALTER TABLE `tbl_orderlist`
  ADD PRIMARY KEY (`orderDID`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`PRD_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_brand`
--
ALTER TABLE `tbl_brand`
  MODIFY `B_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_orderlist`
--
ALTER TABLE `tbl_orderlist`
  MODIFY `orderDID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `PRD_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `userID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2020697486;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
