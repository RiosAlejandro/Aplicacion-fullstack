const Form = () => {
  return ( 
    <>
      <h2>User Register</h2>
      <form>
        <div>
          <label>Name:</label>
          <input 
            type="text"
            placeholder="Juanito Cazares"
            name="name"
          />
        </div> 

        <div>
          <label>User:</label>
          <input 
            type="text"
            placeholder="JuanoCaza12"
            name="user"
          />
        </div>

        <div>
          <label>Email:</label>
          <input 
            type="text"
            placeholder="juancito98@gmail.com"
            name="email"
          />
        </div>

        <div>
          <label>Phone:</label>
          <input 
            type="number"
            placeholder="3437445566"
            name="phone"
          />
        </div>

        <div>
          <label>Password:</label>
          <input 
            type="password"
            placeholder="**********"
            name="password"
          />
        </div>

        <div>
          <label>Repeat password:</label>
          <input 
            type="password"
          />
        </div>

        <div>
          <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Hover me
          </button>
        </div>

      </form>
    </>
   );
}
 
export default Form;
