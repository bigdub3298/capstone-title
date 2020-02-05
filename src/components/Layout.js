import React from "react"
import Header from "src/components/Header"
import Footer from "src/components/Footer"

export default function Layout(props) {
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
