import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { key: 1, name: "New", icon: <AiFillHome />, type: "home" },
    { key: 2, name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { key: 3, name: "Music", icon: <CgMusicNote />, type: "category" },
    { key: 4, name: "Films", icon: <FiFilm />, type: "category" },
    { key: 5, name: "Live", icon: <MdLiveTv />, type: "category" },
    { key: 6, name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { key: 7, name: "News", icon: <ImNewspaper />, type: "category" },
    { key: 8, name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { key: 9, name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        key: 10,
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { key: 11, name: "Settings", icon: <FiSettings />, type: "menu" },
    { key: 12, name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { key: 13, name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { key: 14, name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];