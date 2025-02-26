import React from "react";
import Layout from "./../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  if (user?.role !== "admin") {
    return <Navigate to="/home" replace />;
  }
  return (
    <Layout>
      <div className="container p-5">
        <div className="flex flex-col mt-5">
          <h1 className="text-3xl">
            Welcome, <span className="text-green-500">{user?.name}</span>
          </h1>
          <h3 className="text-xl mt-3">Manage Blood Bank App</h3>
          <hr className="border-black" />
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            praesentium maxime quo magnam debitis voluptatum earum nam
            necessitatibus incidunt, laborum inventore alias molestiae repellat
            quia natus illum nesciunt corrupti totam! Delectus, soluta quasi.
            Officiis enim ratione dolor vel iure ipsum. Optio dolorem veniam
            ratione alias quo commodi ipsam nisi maiores sequi deleniti incidunt
            iste eligendi, enim accusamus delectus velit rerum voluptatibus rem
            hic culpa cum temporibus? Quo sequi earum ea est culpa. Reiciendis
            et sequi quos nisi natus facere veniam ut necessitatibus officia
            eligendi error repellendus ab repudiandae accusamus voluptatum,
            molestias recusandae maxime dolorem reprehenderit nemo amet
            voluptates distinctio! Voluptatem, sunt esse fugiat nostrum tenetur
            nesciunt iure quis. Maxime architecto accusantium expedita? Dolore
            ratione ut magni doloremque, assumenda sint commodi quia culpa
            tempora ab vero. Rem voluptas sequi quidem quis, non deserunt
            aspernatur, fuga amet magni natus, repellendus qui eaque odit! Quam
            facilis consequuntur magnam iusto. Deserunt reprehenderit, molestias
            eos expedita fugit qui in inventore explicabo maiores consectetur
            quo velit odit rem vero labore! Vitae harum quas, fugit laudantium
            at beatae autem illum, possimus itaque temporibus hic laborum, ipsum
            delectus? Possimus, explicabo? Repudiandae ipsam officia neque, odit
            doloremque molestiae, iste tenetur corrupti animi mollitia
            reprehenderit quod earum modi fugiat laudantium dolor necessitatibus
            exercitationem? Vero incidunt minima et laboriosam facilis esse
            itaque delectus dolor ratione error fuga doloremque explicabo,
            numquam voluptates corrupti reiciendis? Odio sint eveniet maiores
            unde iste fugit nesciunt vero distinctio sunt, dolorum harum ex.
            Magni recusandae quod neque, libero sequi quidem dignissimos velit
            porro sit deserunt distinctio labore minus eaque ut id vero, nobis
            dicta accusantium magnam, provident laudantium quasi odit suscipit
            molestias! Quo, dolore ipsam, quidem omnis quos placeat doloremque
            quod quasi velit labore commodi ullam minima perspiciatis. Aut neque
            necessitatibus soluta. Saepe corporis recusandae nobis ea et fuga
            alias? Nulla eum eius molestias ipsa quas. Harum?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
