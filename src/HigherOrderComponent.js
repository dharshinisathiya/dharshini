
export const HigerOrderComponent = (BestSellerComponent) => {
    return(props) => {
      return (
          <div style={{position:'relative'}}>
              <p className="best-seller-tag">Best seller</p>
              <BestSellerComponent  
              {...props}/>
          </div>
        )
    }
  }
  