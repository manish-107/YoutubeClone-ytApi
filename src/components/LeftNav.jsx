import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftNavMenuitem from './LeftNavMenuitem';
import { categories } from '../utils/constants';
import { Context } from '../context/contextApi';

// LeftNav component for displaying the navigation menu on the left side
const LeftNav = () => {
    // Destructuring values from the context
    const { selectCategories, setselectCategories, mobileMenu } = useContext(Context);
    const navigate = useNavigate();

    // Function to handle menu item clicks
    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
            case "home":
                setselectCategories(name);
                break;
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        // LeftNav container with conditional styles based on mobileMenu state
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : "translate-x-[-240px]"}`
            }>
            {/* Menu items */}
            <div className="flex px-5 flex-col">
                {categories.map((item) => (
                    <div key={item.key}>
                        {/* LeftNavMenuitem component for each menu item */}
                        <LeftNavMenuitem
                            key={item.key}
                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                clickHandler(item.name, item.type);
                                navigate("/");
                            }}
                            // Conditional styling for the selected category
                            className={`${selectCategories === item.name ? "bg-white/[0.15] " : ""}`}
                        />
                        {/* Divider line */}
                        {item.divider && <hr className='my-5 border-white/[0.2]' />}
                    </div>
                ))}
                {/* Divider line */}
                <hr className='my-5 border-white/[0.2]' />
                {/* Clone information */}
                <div className="bg-white/[0.15] text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]">
                    Clone by : <a href='https://twitter.com/Mani_xsh'> Manish</a>
                </div>
            </div>
        </div>
    );
}

export default LeftNav;
