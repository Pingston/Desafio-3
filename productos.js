const fs = require( 'fs' )

const baseProd = JSON.parse( fs.readFileSync( './productos.json' ) )
const jsonFile = 'productos.json';

class Contenedor
{
  constructor ( contenedor )
  {
    this.contenedorArray = contenedor;
  }

  async write ( params )
  {
    const productoNuevo = JSON.stringify( params, null, 2 )
    await fs.promises.writeFile( jsonFile, productoNuevo, 'utf8' );
  }

  async save ( obj )
  {
    try {
      const data = JSON.parse( await fs.promises.readFile( 'productos.json', 'utf8' ) )
      const contenedorArray = data;
      contenedorArray.push( obj );
      let id = 0

      contenedorArray.forEach( ( producto ) =>
      {
        if ( producto.id > id ) id = producto.id

      } )

      obj.id = id + 1
      await fs.promises.writeFile( jsonFile, JSON.stringify( contenedorArray, null, 2 ) );

    } catch ( err ) {
      console.log( err )
    }
  }

  async getById ( idNumber )
  {
    try {
      const data = JSON.parse( await fs.promises.readFile( jsonFile, 'utf8' ) )
      this.contenedorArray = data;
      const producto = this.contenedorArray.find( ( producto ) => producto.id === idNumber )
      if ( producto ) console.log( producto )
      else console.log( 'No se ha encontrado el producto, pruebe otra ID' )
    } catch ( err ) {
      console.log( err )
    }

  }

  async getAll ()
  {
    const data = await fs.promises.readFile( jsonFile )
    const productos = JSON.parse( data )
    if ( productos.length ) {
      const todosLosProductos = productos.map( ( producto ) => producto )
      console.log( todosLosProductos )
    } else {
      console.log( 'No hay productos' )
    }
  }

  async deleteById ( idNumber )
  {
    try {
      const data = await fs.promises.readFile( jsonFile )
      this.contenedorArray = JSON.parse( data )

      const newData = this.contenedorArray.findIndex( ( producto ) => producto.id === idNumber ? true : false )
      if ( newData !== -1 ) {
        this.contenedorArray.splice( newData, 1 )
        this.write( this.contenedorArray )
        console.log( 'El producto ha sido borrado' )
      } else {
        console.log( 'El producto no se encuentrao ya ha sido borrado' )
      }

    } catch ( err ) {
      console.log( err )
    }
  }

  async deleteAll ()
  {
    try {
      const data = JSON.parse( await fs.promises.readFile( jsonFile, 'utf8' ) )
      if ( data.length ) {
        this.write( [] )
        console.log( 'El contenedor de productos ha sido vaciado' )
      } else {
        console.log( 'Esta vacía' )
      }

    } catch ( err ) {
      console.log( err )
    }
  }


  async createNewProdTxt ()
  {
    try {
      const data = await fs.promises.readFile( jsonFile, 'utf8' )
      this.contenedorArray = JSON.parse( data )
      const newProductTxt = fs.promises.writeFile( './productos.txt', JSON.stringify( this.contenedorArray, null, 2 ) )
      return newProductTxt;

    } catch ( err ) {
      console.log( err )
    }
  }
}


const contenedor = new Contenedor( baseProd );
const productoNuevo1 = {
  title: 'Microondas',
  price: 30000,
  thumbnail:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fphhttps://philco.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/m/p/mpd8620.jpgilco.com.ar%2Fmicroondas-philco-20l-digital.html&psig=AOvVaw2Xx6l-mAVdOWC2C8RSMg32&ust=1654280393920000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDEoOywj_gCFQAAAAAdAAAAABAD'
}
const productoNuevo2 = {
  title: 'Tostadora',
  price: 10000,
  thumbnail:
    'https://philco.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/9/4/94to20wdh_1_1.jpghttps://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/7/37846-min_1.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fphilco.com.ar%2Ftostadora-2-rebanadas-to20w-philco.html&psig=AOvVaw3s_07GetOnKaJVRIHyq1Uk&ust=1654280351513000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiDh9iwj_gCFQAAAAAdAAAAABAD'
}
const productoNuevo3 = {
  title: 'Heladera',
  price: 80000,
  thumbnail:
    'https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hendel.com%2Fheladera-con-freezer-philco-285l-phct290x-inox.html&psig=AOvVaw3wuY7jAgJAXB0vl82-pt65&ust=1654280328522000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjfuM2wj_gCFQAAAAAdAAAAABAD.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186198000'
}


// await contenedor.save( productoNuevo1 );
// await contenedor.save( productoNuevo2 );
// await contenedor.save( productoNuevo3 );
//await contenedor.getById()
//contenedor.getAll()
//contenedor.deleteAll()
//await contenedor.deleteById()
//await contenedor.createNewProdTxt()
