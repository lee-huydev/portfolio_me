import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types'
import { NavProps } from "@typing";
import { ReactElement } from "react";

function NavLink({ href, exact, children, ...props }: NavProps): ReactElement {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};
NavLink.defaultProps = {
    exact: false
};
export default NavLink;