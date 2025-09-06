const WhyChooseUs = ({move}) => {
  return (
    <div className="original-div">
      <section id="why-choose-us" className="section-p1">
        <h2 className="why-title" style={{ fontSize: '46px', lineHeight: '54px', color: 'rgb(34, 34, 34)', textAlign: 'center'}} >Why Choose Us</h2>
        <div className="why-container">
          {move.map((reason) => (
          <div key={reason.id} className="why-card">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
         </div>
          ))}
        </div>
      </section>

    </div>
  )
}
export default WhyChooseUs