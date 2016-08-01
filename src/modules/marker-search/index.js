import { subscribe, publish } from 'minpubsub';

export default {
  render(selector) {
    // Clear container element
    const container = document.querySelector(selector);
    const fragment = document.createDocumentFragment();
    container.innerHTML = '<svg viewBox="0 0 1 1"><use xlink:href="#icon-search"></use></svg>';
    const $input = document.createElement('input');
    $input.setAttribute('placeholder', 'Search');
    $input.addEventListener('keyup', (e) => {
      // Get all markers in document
      const $markers = document.querySelectorAll('mark-');
      const pattern = new RegExp(e.target.value, 'i');
      // Remove any highlighted text
      [...document.querySelectorAll('.matched b')]
      .forEach(x => (x.outerHTML = x.innerHTML));
      // Remove all old searched and matched
      [...$markers].forEach(x => {
        x.classList.remove('searched');
        x.classList.remove('matched');
        return x;
      });
      // If the search term was more than one character
      if (e.target.value.length > 1) {
        [...$markers].map(x => {
          x.classList.add('searched');
          x.classList.remove('matched');
          return x;
        }).filter((x, i, a) => {
          // Caption has already been marked as a match
          if (x.classList.contains('matched')) return true;
          // Caption string plus the next one if exists
          let str = x.textContent;
          if (i < a.length - 1) str += ` ${a[i + 1].textContent}`;
          // Lowercase caption text to make search case insensitive
          str = str.toLowerCase();
          const io = str.indexOf(e.target.value);
          // There was a match in this or the next caption
          if (io !== -1) {
            // The match starts in the next caption
            if (io > x.textContent.length) return false;
            // The match starts in this caption
            x.classList.add('matched');
            const matchText = x.textContent.substr(io, e.target.value.length);
            const matchElem = x.firstElementChild;
            // Hightlight from the start of match to end of match
            matchElem.innerHTML = matchElem.innerHTML.replace(matchText, `<b>${matchText}</b>`);
            // The match ends in the next capton
            if ((io + e.target.value.length) > x.textContent.length) {
              const nextCaption = a[i + 1];
              const overlap = (io + e.target.value.length) - x.textContent.length - 1;
              const overlapText = nextCaption.textContent.substr(0, overlap);
              const nextElem = nextCaption.firstElementChild;
              // Mark next caption as matched
              nextCaption.classList.add('matched');
              // Highlight from start of match till end of this caption
              nextElem.innerHTML = nextElem.innerHTML.replace(overlapText, `<b>${overlapText}</b>`);
            }
            return true;
          }
          // There was no match in this or the next caption
          return false;
        });
      }
    });
    fragment.appendChild($input);
    container.appendChild(fragment);
  },
};
