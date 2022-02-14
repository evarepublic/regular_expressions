"use strict";
// 1, 2, 3
const addTags = (elem, tag) => elem = `<${tag}>${elem}</${tag}>`;

const styleChange = (id, tag, exp) => {
  const block = document.getElementById(`${id}`);
  block.innerHTML = block.innerHTML.replace(exp, match => addTags(match, tag));
};

styleChange('task1', 'strong', /функц[а-яё]+/gi);

styleChange('task2', 'b', /\d{2}:\d{2}/g);

styleChange('task1', 'mark', /[«»"']{1}.+[«»"']{1}/g);
styleChange('task2', 'mark', /[«»"']{1}.+[«»"']{1}/g);

// 4, 6
const protocolsCut = (str) => {
  return str.includes("www.") ? str.slice(11) : str.slice(7);
};

const linkChange = (match, val) => {
  let text;
  if (match.match(/\//g).length > 2) {
    text = match.match(val)[0];
    text = protocolsCut(text);
  } else {
    text = protocolsCut(match);
  }
  match = `<a href="${match}">${text}</a>`;
  return match;
};

const foo = () => {
  const block = document.getElementById("task2");
  block.innerHTML = block.innerHTML.replace(
    /(http:\/\/(www.)?\w+.[a-z]{2,3})([\w\-\/]*)/gi,
    (match, val) => linkChange(match, val)
  );
};

foo();

// 5
 const colorFinder = () => {
   const block = document.querySelector('body');
   let res = block.innerHTML.match(/\#[\da-f]{6}/gi);
   return res;
 };

console.log('%c First color', `color: ${colorFinder()[0]}`);
console.log('%c Second color', `color: ${colorFinder()[1]}`);