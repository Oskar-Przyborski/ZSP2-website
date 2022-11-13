import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import Navigation from "./Navigation";
import Article from "./Article";
import TiktokEmbed from "./TiktokEmbed";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([Navigation, Article, TiktokEmbed]),
});
