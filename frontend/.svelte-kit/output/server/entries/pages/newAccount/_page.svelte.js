import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let callsign;
  let factionList = [];
  return `<main><a href="/">Back</a>
	<h1>Create Account</h1>
	<div class="create-form"><h3>Callsign:</h3>
		<input${add_attribute("value", callsign, 0)}>
		<h3>Faction:</h3>
		<form><select>${each(factionList, (faction) => {
    return `<option${add_attribute("value", faction, 0)}>${escape(faction)}
				</option>`;
  })}</select>
			<button ${"disabled"} type="submit">Submit
			</button></form></div>
</main>`;
});
export {
  Page as default
};