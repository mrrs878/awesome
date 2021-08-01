/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-01 21:21:05
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-08-01 21:48:19
 * @FilePath: \awesome\floatHeart\index.js
 */
const { d3, document } = window;
const COLORS = ['rgb(254, 67, 101)', 'rgb(213, 26, 33)', 'rgb(130, 57, 53)', 'rgb(29, 191, 151)', 'rgb(64, 116, 52)'];
const linkIcon = document.querySelector('#linkIcon');
let count = 0;

function createBubble() {
  const svg = d3.select('svg');
  const x = 300 - Math.random() * 40;
  const colorIndex = Math.floor(COLORS.length * Math.random());
  console.log(colorIndex);

  const container = svg.append('g')
    .attr('transform', `translate(${x}, 360)`);

  container.append('circle')
    .attr('r', 15)
    .attr('fill', COLORS[colorIndex])
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
    .style('opacity', '0')
    .style('transform', 'translate(300px, 0)');
}

function like() {
  linkIcon.classList.add('active');
  count += 1;
  const bubble = createBubble(count);
  updateBubble(bubble);

  setTimeout(() => {
    linkIcon.classList.remove('active');
  }, 100);
}

function initSVG() {
  d3.select('#container')
    .append('svg')
    .style('font', '10px sans-serif')
    .style('overflow', 'inherit')
    .style('user-select', 'none');
}

function initEvents() {
  linkIcon.addEventListener('click', like);
}

function boot() {
  initEvents();
  initSVG();
}

boot();
