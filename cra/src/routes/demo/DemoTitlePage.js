import React from 'react'

import DemoTitle from 'components/demo/DemoTitle'

const DemoTitlePage = () => (
  <div
    className="DemoTitlePage"
    style={{ backgroundColor: '#ccc', padding: '30px' }}
  >
    <p>
      This is the <code>src/routes/demo/DemoTitlePage.js</code> passing a title
      to the <code>src/components/demo/DemoTitle.js</code> component.
    </p>
    <DemoTitle title="My title" />
  </div>
)

export default DemoTitlePage
