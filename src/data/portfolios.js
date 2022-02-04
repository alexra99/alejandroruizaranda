import react1 from '../img/portImages/react_styled.png';
import maze from '../img/maze.png';
import wbot from '../img/wbot.png';
import graph from '../img/graph.png';
import exp from '../img/exp.png';
import etl from '../img/etl.png';
import bla from '../img/bla.png';
import sps from '../img/sps.png';
import vino from '../img/vino.png';


const portfolios = [
    {
        id: 1,
        category: 'Python',
        image: maze,
        link1: 'https://github.com/alexra99/MAZE_SOLVER',
        title: 'Maze Solver',
        tec: 'Python, Json.',
        text: 'Programa para generar y resolver laberintos mediante Inteligencia Artificial.'
    },
    {
        id: 2,
        category: 'Python',
        image: wbot,
        link1: 'https://github.com/alexra99/DSW',
        title: 'WhatsApp Bot',
        tec: 'Python, PyQt, JavaScript, Selenium, MongoDB.',
        text: 'Bot para envío masivo automático de mensajes en WhatsApp con interfaz PyQT.'
    },
    {
        id: 3,
        category: 'Python',
        image: graph,
        link1: 'https://github.com/alexra99/DisenoDeAlgoritmosGrupoDA2',
        title: 'Electric Network Graphs',
        tec: 'Python, Teoría de Grafos, Saax, Sphinx',
        text: 'Programa para calcular la distrubución óptima de la red eléctrica de Ciudad Real mediante Teoría de Grafos.'
    },
    {
        id: 4,
        category: 'Clips',
        image: exp,
        link1: 'https://github.com/alexra99/Sistema-Experto-Seguros',
        title: 'Sistema Experto para Predicción de Riesgos',
        tec: 'Sistemas Basados en el Conocimiento, Lógica Borrosa, Clips, FuzzyClips',
        text: 'Sistema experto basado en reglas para la predicción del riesgo en la pólizas de clientes de aseguradoras,'
    },
    {
        id: 5,
        category: 'Python',
        image: etl,
        link1: 'https://github.com/alexra99/alejandro_ruiz_aranda_sma__2021',
        title: 'ETL Empleos',
        tec: 'Python, Spade, Pandas, Docker, MongoDB',
        text: 'Sistema Multiagente para proceso ETL de obtención automática de ofertas de trabajo de las principales webs de España.'
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://www.google.com',
        title: 'Página Web Personal Responsive',
        tec: 'React JS, JavaScript, CSS, HTML',
        text: 'Página Web Personal realizada con componentes React.'
    },
    {
        id: 7,
        category: 'Python',
        image: bla,
        link1: 'https://github.com/alexra99/Data-Mining',
        title: 'Cálculo de Riesgo en rutas Blablacar ',
        tec: 'Python, Google Collab, Pandas, Big ML, WebScraping, FuzzyLogic, MachineLearning, FeatureEngineering, Clustering Algorithms, Unsupervised Learning',
        text: 'Proyecto de Data Mining en el que se obtienen reglas para crear un sistema borroso de cálculo de riesgo de una determinada ruta'
    },
    {
        id: 8,
        category: 'Python',
        image: sps,
        link1: 'https://github.com/alexra99/Supervised-Learning',
        title: 'Predicción de precios de pólizas',
        tec: 'Python, Google Collab, Pandas, Sci-kit Learn, Supervised Learning, Regression, KNN, Decision Trees, Random Forests.',
        text: 'Proyecto de Machine en Learning en el que se crean modelos para la predicción del precio de pólizas de seguros.'
    },
    {
        id: 9,
        category: 'Python',
        image: vino,
        link1: 'https://github.com/alexra99/MachineLearningTechniquesAL',
        title: 'Wine Quality Study',
        tec: 'Python, Google Collab, Pandas, Sci-kit Learn, Unsupervised Learning, PCA, Clustering Algorithms',
        text: 'Proyecto de Machine en Learning en el que estudian diversos vinos de un data con el objetivo de obtener las cualidades que determinan la calidad del vino.'
    }
]

export default portfolios;