import React from 'react';
import * as styles from "./styles.module.scss";
import { Link } from "gatsby";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HeaderMenu({ items = {} }) {
    return (
        <nav>
            <ul className={`${styles.menuList}`}>
                {Object.entries(items).map(([key, value], i) => {
                    return (
                        <li className={`${styles.menuListItem} group/item`} key={i}>
                            <Link to={value?.href ? value.href : ''} className={`${styles.menuLink}`} key={key}>
                                {<span className={`${styles.menuLinkText}`}>{key}</span>}
                                {
                                    value?.submenu
                                    &&
                                    <ExpandMoreIcon />
                                }
                            </Link>
                            {
                                value?.submenu
                                &&
                                <ul className={`${styles.menuSublist} group-hover/item:flex`}>
                                    {value.submenu.map((item) => {
                                        return (
                                            <li key={item}>
                                                <Link to="/">{item}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
