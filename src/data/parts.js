
import armArticulatedClaw from './images/50c49b519e401086eb672ebd0257b305.png'
import armDualClaw from './images/c8f94bfdd70f22282cb212beaebeaced.png'
import armGrabber from './images/cea18aecbcbbf75af570e593776e9ced.png'
import armPropeller from './images/d3598f9d9c8e10c4e7999d9dfc3d6f9d.png'
import armStubbyClaw from './images/pngegg.png'



const parts = {

  arms: [
    {
      id: 1,
      description: 'Шарнирная рука с крюком — отлично подходит для работы за углами или в ограниченном пространстве.',
      title: 'Артикулятор',
      src: armArticulatedClaw,
      type: 'arms',
      cost: 275,
    },
    {
      id: 2,
      description: 'Рука с двумя независимыми крюками — отлично подходит, когда вам нужна дополнительная рука. Нужны четыре руки? Оснастите своего бота двумя такими руками.',
      title: 'Клешня',
      src: armDualClaw,
      type: 'arms',
      cost: 285,
    },
    {
      id: 3,
      description: 'Телескопическая рука с захватом.',
      title: 'Загребатель',
      src: armGrabber,
      type: 'arms',
      cost: 205.5,
    },
    {
      id: 4,
      description: 'Рука с пропеллером — подходит для движения или в качестве охлаждающего вентилятора.',
      title: 'Пропеллер',
      src: armPropeller,
      type: 'arms',
      cost: 230,
      onSale: true,
    },
    {
      id: 5,
      description: 'Короткая и сильная рука с клешней — просто, но дешево.',
      title: 'Короткая клешня',
      src: armStubbyClaw,
      type: 'arms',
      cost: 125,
    },
  ],
};
export default parts;