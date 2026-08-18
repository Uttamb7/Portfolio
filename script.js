document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => entry.isIntersecting && (entry.target.classList.add("visible"), observer.unobserve(entry.target))),
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const voyageMap = document.getElementById("voyage-map");

if (voyageMap) {
  const routeObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) voyageMap.dataset.route = entry.target.dataset.routeIndex;
    }),
    { rootMargin: "-35% 0px -45%", threshold: 0 }
  );

  document.querySelectorAll("[data-route-index]").forEach(project => routeObserver.observe(project));
}
