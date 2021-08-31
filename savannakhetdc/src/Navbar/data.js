import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'ຫນ້າຫຼັກ',
    icon: <FaHome />,
  },
  // {
  //   id: 2,
  //   url: '/students',
  //   text: 'ນັກສຶກສາ',
  //   icon: <FaUserFriends />,
  // },
  {
    id: 3,
    url: '/document',
    text: 'ເອກະສານ',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/score/1/1',
    text: 'ຄະແນນ',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
