let cards = [
  {id: '1', name: 'First Card', status: 'ToDo', priority: 1},
  {id: '2', name: 'Second Card', status: 'Progress', priority: 2},
  {id: '3', name: 'Third Card', status: 'review', priority: 10}
]

function routes(app) {


  app.get('/card', (req, res) => {
    res.send(cards)

  })

  app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId
    cards = cards.filter(el => el.id !== cardId)
    res.send(cards)
  })

  app.post('/card', (req, res) => {
    const card = req.body
    cards.push({id: Math.random().toString(), ...card})
    res.send('Card created')
  })


  app.patch('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId
    const card = req.body
    cards = cards.map(el => el.id == cardId ? ({id: el.id, ...card}) : el)
    res.send(cards)
  })

}

module.exports = routes;

