-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 02, 2021 at 11:48 PM
-- Server version: 5.6.51-cll-lve
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jingweiwu_wnm608`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_animals`
--

CREATE TABLE `track_animals` (
  `id` int(13) NOT NULL,
  `user_id` int(13) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `breed` varchar(64) DEFAULT NULL,
  `description` text,
  `img` varchar(256) DEFAULT NULL,
  `date_create` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `track_locations`
--

CREATE TABLE `track_locations` (
  `id` int(13) NOT NULL,
  `animal_id` int(13) DEFAULT NULL,
  `lat` decimal(8,6) DEFAULT NULL,
  `lng` decimal(9,6) DEFAULT NULL,
  `description` text,
  `photo` varchar(256) DEFAULT NULL,
  `icon` varchar(256) DEFAULT NULL,
  `date_create` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(13) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_animals`
--
ALTER TABLE `track_animals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track_locations`
--
ALTER TABLE `track_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
