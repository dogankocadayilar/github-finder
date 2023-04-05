import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function User() {
  const users = useSelector((state) => state.users);

  return <section>User</section>;
}

export default User;
