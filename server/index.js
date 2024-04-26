const express = require('express');
const app = express();
const port = 5001;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(bodyParser());


const conn = mongoose.connect(`mongodb+srv://rajatrandai7:WGNkOS7sh4mB9Pgu@myclust.gpxizno.mongodb.net/ecom`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection successfull")
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    cart: Array,
    orders: Array,
    email: String,
})

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    rating: String,
    description: Array,
    image: String
});


const users = new mongoose.model("users", UserSchema)
const tvs = new mongoose.model("tvs", ProductSchema);
const earphones = new mongoose.model("earphones", ProductSchema);
const clothings = new mongoose.model("clothings", ProductSchema);
const homeappliences = new mongoose.model("homeappliences", ProductSchema);
const mobiles = new mongoose.model("mobiles", ProductSchema);
const laptops = new mongoose.model("laptops", ProductSchema);
const shoes = new mongoose.model("shoes", ProductSchema);
const watches = new mongoose.model("watches", ProductSchema);
const all = new mongoose.model("all", ProductSchema);

app.get('/',(req,res)=>{
    res.send("ok...");
})

app.post('/all', async (req, res) => {
    console.log(req.body);
    await all.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/product', async (req, res) => {

    console.log(req.body);

    let id = req.body.id;
    let resData = [];

    await tvs.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await mobiles.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await laptops.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await shoes.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await watches.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await all.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await clothings.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await homeappliences.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    await earphones.find({ _id: id }).then((data) => {
        resData.push(data);
    });

    let data = resData.filter(arr => arr.length > 0);

    res.send(data);

});

app.post('/tvs', async (req, res) => {
    await tvs.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/clothings', async (req, res) => {
    await clothings.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/laptops', async (req, res) => {
    await laptops.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/shoes', async (req, res) => {
    console.log(req.body);
    await shoes.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/earphones', async (req, res) => {
    console.log(req.body);
    await earphones.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/homeappliences', async (req, res) => {
    console.log(req.body);
    await homeappliences.find({ price: { $lt: req.body.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/mobiles', async (req, res) => {
    console.log(req.body);
    await mobiles.find({ price: { $lt: req?.body?.range } }).then((data) => {
        res.send(data);
    })
})
app.post('/watches', async (req, res) => {
    await watches.find({ price: { $lt: req?.body?.range } }).then((data) => {
        res.send(data);
    })
})

app.post('/addtocart', async (req, res) => {
    const { username } = req.body;
    await users.findOne({ username }).then(async (d) => {
        d.cart.push(req.body);
        await d.save();
    })
})

app.post('/placeorder', async (req, res) => {
    const { username } = req.body;
    await users.findOne({ username }).then(async (d) => {
        d?.orders.push(req.body);
        await d.save();
    })
})

app.post('/login', async (req, res) => {
    const { email, password } = req?.body;

    const data = await users.findOne({ email }).then(async (data) => {
        let d = await bcrypt.compare(password, data.password);
        if (d) {
            res.status(200).send({ message: 'user found', 'email': data?.email, 'username': data?.username });
        }
        else {
            res.status(404).send("invalid user")
        }
    })

})

app.post('/register', async (req, res) => {
    const { username, password } = req?.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
        'username': username,
        'password': hashedPassword,
        'cart': [],
        'orders': [],
        'email': req?.body?.email
    }

    const newUser = new users(userData);
    newUser.save().then((r) => {
        res.status(200).send("user created successfully");
    })
})

app.post('/cart', (req, res) => {
    const { email } = req.body;
    users.findOne({ email }).then((data) => {

        resData = {
            username: data?.username,
            cart: data?.cart,
            email: data?.email,
            _id: data?._id
        }
        res.send(resData);
    });
})

app.post('/orders', (req, res) => {
    const { email } = req.body;
    users.findOne({ email }).then((data) => {

        resData = {
            username: data?.username,
            orders: data?.orders,
            email: data?.email,
            _id: data?._id
        }
        res.send(resData);
    });
})

app.post('/cartremove', async (req, res) => {
    const { username, productname, email } = req.body;

    await users.findOne({ username }).then((data) => {
        let cart = data?.cart;
        let updatedCart = [];
        cart?.forEach(element => {
            if (element.productname !== productname) {
                updatedCart.push(element);
            }
        });
        data.cart = updatedCart;
        data.save();
    })
})

app.post('/search', async (req, res) => {
    let search = req?.body?.search;
    await all.find({ name: { $regex: search } }).then((d) => {
        res.send(d);
    })
})

app.listen(port, () => {
    console.log(`listening on port no : ${port}`);
})

