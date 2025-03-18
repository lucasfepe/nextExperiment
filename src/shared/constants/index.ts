// Cool: I wanted to abstract the logic for determining the next section
// when navigating with the side arrows. However, when one of the
// sections required a wrapper component, using section.nextSibling
// became unreliable. To simplify this, I created an array to track
// the section order, avoiding the need for complex logic and
// excessive time spent optimizing for programming principles.

export const SECTION_ORDER = ['hero', 'about', 'projects', 'workHistory', 'contact'];
export const hihi = 4;