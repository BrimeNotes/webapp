export default {
  session: !!sessionStorage.jwt,
  notes:
    typeof localStorage.getItem("brime_notes") === "string"
      ? JSON.parse(localStorage.getItem("brime_notes"))
      : []
};
