import React, { Component } from 'react'
import { Grid, Checkbox, Form, TextArea } from 'semantic-ui-react'
import './Wishlist.css'
import { animated } from 'react-spring'






class WishlistItem extends Component {

  

  render () {
    return (
        <animated.div style={{...this.props.styles}}>
            <Grid key={this.props.hotel.id} className="blade" >
                  <Grid.Column   width={5}>
                    <div className='wishlist-hotel-image'>
                      <a className="wishlist-hotel-image" href={"http://" + this.props.hotel.website} target="_blank" style={{paddingLeft: "40px"}}> 
                      {this.props.hotel.name}, {this.props.hotel.city}
                      </a>
                      <img style={{maxWidth: "100%",  paddingTop: "20px", paddingLeft: "40px", paddingBottom: "50px"}} src={this.props.hotel.imageurl} alt=""/>
                    </div>           
                  </Grid.Column>
                  <Grid.Column  width={3} >
                    <div className='wishlist-hotel-checklist'>
                    {
                      this.props.hotel.checklist_items.map((item, i) => {
                        return (
                          <div key={i} style={{maxWidth: "100%", paddingLeft: "50px", paddingBottom: "18px"}}>
                            <Checkbox checked={item.checked} label={item.content} onChange={(event) => this.props.changeWishlistItem(this.props.hotel.hotel_id, item, i)}/>
                          </div>
                        )
                      })
                    }                                                                                                      
                    </div>
                  </Grid.Column>
                  <Grid.Column  width={5}> 
                    <div className='wishlist-hotel-note'>
                      <div style={{maxWidth: "100%"}}>
                        <Form style={{paddingLeft: "20px"}}>
                          <TextArea className="note" style={{ minHeight: 250}} placeholder='Sticky notes are so old-school. Instead, we want you to use this digital space to write down your questions & comments you might want to look into before you go ahead and book your holiday.' 
                          onChange={(event) => this.props.changeWishlistItemNote(this.props.hotel.hotel_id, event.target.value)} 
                          value={this.props.hotel.note} />
                        </Form>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column  width={3}> 
                    <div>
                      <div style={{maxWidth: "100%"}}>
                        <button className='remove-from-wishlist-button' onClick={() => this.props.removeHotelFromWunderlist(this.props.hotel)}>
                          Not feeling this hotel anymore...let's remove it.
                        </button>
                      </div>
                    </div>
                  </Grid.Column>
            </Grid>
          </animated.div>
        )
  }
}

export default WishlistItem
