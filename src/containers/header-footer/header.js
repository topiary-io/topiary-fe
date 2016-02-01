import m from "mithril"

class Header {
  view () {
    return m("header",
      m("a#admin-home",
        { href: "/admin", config: m.route },
        // TODO : link this text to config value
        "topiary"
      )  
    )
  }
}

export default new Header
