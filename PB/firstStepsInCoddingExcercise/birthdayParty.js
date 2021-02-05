function budget(rentInput){
    const rentHall = parseInt(rentInput)
    const cake = rentHall*20/100
    const beverages = cake - cake*0.45
    const animator = rentHall/3
    const res = ((rentHall) + (cake) + (animator)+ (beverages))
    console.log(res)
}
 budget("3720")