import React from 'react';


class Cast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li className='py-2'>
        <p className='p-0 m-0 '>{this.props.date.datetime}</p>
        <p className='p-0 m-0 h3'>{this.props.date.description}</p>
      </li>

  )
}

}
export default Cast;