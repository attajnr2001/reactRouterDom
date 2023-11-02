import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help">
      <h2>Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ut
        reiciendis repellendus tenetur deserunt quis illum, incidunt iste
        aliquam esse, unde necessitatibus numquam quidem non mollitia
        reprehenderit, ipsam similique magnam. Voluptatibus, reiciendis eos.
        Eius ipsa, eum, enim eaque officiis ducimus nostrum aperiam, optio
        asperiores ea atque quia!
      </p>

      <div className="links">
        <NavLink to={"contact"}>Contact Us</NavLink>
        <NavLink to={"faq"}>FAQ</NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
