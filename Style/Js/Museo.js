<script>
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const porcentaje = (scrollTop / scrollHeight) * 100;
    document.getElementById("barra-scroll").style.width = porcentaje + "%";
});
</script>
