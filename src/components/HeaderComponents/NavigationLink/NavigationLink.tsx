import clsx from "clsx";
import css from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";

type NavigationLinkProps = {
  onLinkClick?: any;
  linkData: {
    to: string;
    label: string;
  };
};

type BuildClassFunction = {
  isActive: boolean;
};

export const buildActiveClass = ({ isActive }: BuildClassFunction) => {
  return clsx(css.link, isActive && css["active-link"]);
};

const NavigationLink = ({
  onLinkClick,
  linkData: { to, label },
}: NavigationLinkProps) => {
  console.log(onLinkClick);

  return (
    <NavLink
      onClick={onLinkClick}
      className={({ isActive }) =>
        buildActiveClass({
          isActive,
        })
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export default NavigationLink;

// import React, { forwardRef } from "react";
// import clsx from "clsx";
// import css from "./NavigationLink.module.css";
// import { NavLink } from "react-router-dom";

// type NavigationLinkProps = {
//   linkData: {
//     to: string;
//     label: string;
//   };
// };

// type BuildClassFunction = {
//   isActive: boolean;
// };

// export const buildActiveClass = ({ isActive }: BuildClassFunction) => {
//   return clsx(css.link, isActive && css["active-link"]);
// };

// const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
//   ({ linkData: { to, label } }: NavigationLinkProps, ref) => {
//     return (
//       <NavLink
//         ref={ref}
//         className={({ isActive }) =>
//           buildActiveClass({
//             isActive,
//           })
//         }
//         to={to}
//       >
//         {label}
//       </NavLink>
//     );
//   }
// );

// export default NavigationLink;
