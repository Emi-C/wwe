-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 14, 2017 alle 11:01
-- Versione del server: 5.7.14
-- Versione PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wwe`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `wwe_foto`
--

CREATE TABLE `wwe_foto` (
  `id` int(11) NOT NULL,
  `tit` varchar(255) NOT NULL,
  `testo` text NOT NULL,
  `img` varchar(512) NOT NULL,
  `cat` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `wwe_foto`
--

INSERT INTO `wwe_foto` (`id`, `tit`, `testo`, `img`, `cat`) VALUES
(1, 'titolo foto', '<p>Straight from our segment &ldquo;What the hell is this?&rdquo;,&nbsp;<a href="https://via.intercom-mail-100.com/e?ob=IMH71KukunUQ4%2FAixIqZCgIbQuHw46iNk%2FsK26LT4tM%3D&amp;h=31759d611f97c60ab21d68fe842d0ca4964aba6d-7853564308" target="_blank">astronaut.io</a>&nbsp;is a website where you observe a sequence of Youtube videos with&nbsp;<strong>zero views.&nbsp;</strong></p>\r\n', '/wwe/backend/imgups/edra_k.jpg', 1),
(2, 'titolino zigo zago', '<p>Straight from our segment &ldquo;What the hell is this?&rdquo;,&nbsp;<a href="https://via.intercom-mail-100.com/e?ob=IMH71KukunUQ4%2FAixIqZCgIbQuHw46iNk%2FsK26LT4tM%3D&amp;h=31759d611f97c60ab21d68fe842d0ca4964aba6d-7853564308" target="_blank">astronaut.io</a>&nbsp;is a website where you observe a sequence of Youtube videos with&nbsp;<strong>zero views.&nbsp;</strong></p>\r\n', '/wwe/backend/imgups/edra_rgb.png', 2),
(3, 'sdfgbsd bhsdgn ', '<p>sg hsfh sfghd</p>\r\n', '/wwe/backend/imgups/farmapiu.png', 2);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `wwe_foto`
--
ALTER TABLE `wwe_foto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `wwe_foto`
--
ALTER TABLE `wwe_foto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
