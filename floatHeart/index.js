const linkIcon = document.querySelector("#linkIcon");
let linkIconStatus = false;
let svg = null;
let count = 0;

function like() {
  linkIconStatus = true;
  linkIcon.classList.add("active");
  count += 1;
  const bubble = createBubble(count);
  updateBubble(bubble);
  
  setTimeout(() => {
    linkIconStatus = false;
    linkIcon.classList.remove("active");
  }, 100);
}

function createBubble(text) {
  const svg = d3.select("svg");
  const x = 300 - Math.random() * 40;

  const container = svg.append("g")
    .attr('transform', `translate(${x}, 360)`)
  
  container.append('circle')
    .attr('r', 15)
    .attr('fill', 'rgb(254, 67, 101)')
    .attr('class', 'bubble');
    
  container.append('text')
    .text(`+${count}`)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('fill', '#fff');

  return container;
}

function updateBubble(bubble) {
  const t = d3.transition()
    .duration(1000)
    .ease(d3.easeLinear);

  bubble.transition(t)
    .style("opacity", "0")
    .style("transform", "translate(300px, 0)");
}

function initLongPressEvent() {
}

function initSVG() {
  svg = d3.select('#container')
    .append('svg')
    .style('font', '10px sans-serif')
    .style('overflow', 'inherit')
    .style('user-select', 'none');
}

function initEvents() {
  linkIcon.addEventListener("click", like);
}

function boot() {
  initEvents();
  initSVG();
}

boot();
