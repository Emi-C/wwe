-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generato il: Mar 03, 2017 alle 16:51
-- Versione del server: 5.6.33-cll-lve
-- Versione PHP: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `yh22kfvy_ec`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `wwe_foto`
--

CREATE TABLE IF NOT EXISTS `wwe_foto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tit` varchar(255) NOT NULL,
  `testo` text NOT NULL,
  `cat` int(11) NOT NULL,
  `img` varchar(512) NOT NULL,
  `img1` varchar(512) NOT NULL,
  `img2` varchar(512) NOT NULL,
  `img3` varchar(512) NOT NULL,
  `pos` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dump dei dati per la tabella `wwe_foto`
--

INSERT INTO `wwe_foto` (`id`, `tit`, `testo`, `cat`, `img`, `img1`, `img2`, `img3`, `pos`) VALUES
(1, 'titolo foto', '<p>Straight from our segment &ldquo;What the hell is this?&rdquo;,&nbsp;<a href="https://via.intercom-mail-100.com/e?ob=IMH71KukunUQ4%2FAixIqZCgIbQuHw46iNk%2FsK26LT4tM%3D&amp;h=31759d611f97c60ab21d68fe842d0ca4964aba6d-7853564308" target="_blank">astronaut.io</a>&nbsp;is a website where you observe a sequence of Youtube videos with&nbsp;<strong>zero views.&nbsp;</strong></p>\r\n', 1, '/wwe/backend/imgups/edra_k.jpg', '', '', '', 1),
(2, 'titolino zigo zago', '<p>Straight from our segment &ldquo;What the hell is this?&rdquo;,&nbsp;<a href="https://via.intercom-mail-100.com/e?ob=IMH71KukunUQ4%2FAixIqZCgIbQuHw46iNk%2FsK26LT4tM%3D&amp;h=31759d611f97c60ab21d68fe842d0ca4964aba6d-7853564308" target="_blank">astronaut.io</a>&nbsp;is a website where you observe a sequence of Youtube videos with&nbsp;<strong>zero views.&nbsp;</strong></p>\r\n', 2, '/wwe/backend/imgups/edra_rgb.png', '', '', '', 3),
(3, 'sdfgbsd bhsdgn ', '<p>sg hsfh sfghd</p>\r\n', 2, '/wwe/backend/imgups/farmapiu.png', '', '', '', 2),
(4, 'CIAO', '<p>ciaociacoaic</p>\r\n', 3, '/wwe/backend/imgups/IMG_9487.jpg', '', '', '', 1),
(6, 'tit prova', '<p>pippotuo</p>\r\n', 2, '/wwe/backend/imgups/fav4.png', '/wwe/backend/imgups/foto%20cv.jpg', '/wwe/backend/imgups/logo4.png', '', 4),
(7, 'sdsf<sdf', '<p>safd faa fgasg&nbsp;</p>\r\n', 2, '/wwe/backend/imgups/banner%20sfondo-13.png', '/wwe/backend/imgups/wordcloud.png', '', '', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
