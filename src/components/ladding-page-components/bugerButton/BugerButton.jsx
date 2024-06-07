import "./style.css";

export const BugertButton = ({ setOpenNav }) => {
    return (
        <label  className="burger">
            <input onClick={setOpenNav} type="checkbox" className="burger" />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
};
