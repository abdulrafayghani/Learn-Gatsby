import React from 'react'

const DynamicPage = ({ pageContext }) => {
    return (
        <div>
            
      <div>Hello Dynamic Page from {pageContext.name}</div>
      <div>This page is create dynamically at Build Time</div>
        </div>
    )
}

export default DynamicPage
