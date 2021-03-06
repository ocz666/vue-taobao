import Vue from "vue";
import SvgIcon from "./SvgIcon";
Vue.component("svg-icon",SvgIcon);

const req = require.context('./svgs',false,/\.svg$/)
const requireAll=requireContext => {
  return requireContext.keys().map(requireContext)
}

requireAll(req)