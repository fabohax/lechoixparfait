import Image from 'next/image'
import Link from 'next/link'
import Header from '../compos/header'
import Menu from '@/compos/menu';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Menu />
      <div className='flex flex-col md:flex-row mt-4'>
        <div className='relative lg:ml-2 lg:mr-2 lg:mb-0 pmmd:block md:w-1/2md lg:text-5xl ml-0 mb-4 mt-0 p-8 h-auto text-lg border-2 rounded-3xl border-black'>
          <p><strong>Le Choix Parfait</strong> est la méthode de vote: une approche innovante méticuleusement conçue pour prendre des décisions collectives avec précision et réflexion réfléchie.</p>
          <br />
          <Link href="/lemanuel" className='block md:inline-block border-black rounded-full border-2 text-lg p-4 bg-black text-white mt-4 md:mt-0'>Consultez le Manuel</Link>
        </div>
        <Image className="m-0 md:w-full md:ml-2 md:mr-0 md:ml-0 lg:mr-2 mt-6 lg:mt-0 h-auto rounded-3xl md:mt-0 object-cover" src="/choix_a.jpg" height="500" width="500" alt="fr" layout="responsive" objectFit="cover" />
      </div>
      <div className='relative h-auto text-lg md:text-5xl md:mr-0 mt-8 lg:mt-12 ml-2 mr-4 lg:mr-2 p-8 border-2 rounded-3xl border-black'>
        <strong>Pourquoi est-ce le choix parfait?</strong>
        <p className='text-base md:text-lg mt-8'>
          &quot;Le Choix Parfait&quot; est présenté comme une méthode innovante de prise de décision collective mettant l&apos;accent sur l&apos;intelligence et la conscience collectives. Il vise à résoudre les conflits internes, à maintenir l&apos;unité du groupe et à éviter les divisions en utilisant un &quot;vote double&quot; révélant la solution optimale parmi plusieurs propositions. La simplicité et l&apos;applicabilité dans divers contextes sont présentées comme des avantages, favorisant un processus décisionnel informé et équilibré. Bien que l&apos;on affirme que c&apos;est le &quot;choix parfait&quot;, l&apos;évaluation de sa perfection dépendra de la manière dont ses caractéristiques correspondent aux besoins et aux valeurs spécifiques de chaque groupe ou situation.
        </p>
      </div>
      <div className='flex flex-col md:flex-row mt-8 align-middle'>
        <Image className="w-full h-auto mb-4 lg:mb-0 rounded-3xl lg:ml-4 lg:ml-2 object-cover" src="/choix_b.jpg" height="500" width="500" alt="fr" layout="responsive" objectFit="cover" />
        <div className='relative m-2 mt-4 md:w-1/2 lg:mt-0 lg:mr-2 h-auto text-lg md:text-5xl lg:mr-4 lg:ml-4 p-8 border-2 rounded-3xl border-black align-middle'>
          <strong>Comment créer votre enquête ?</strong>
          <p className='text-base md:text-lg mt-8 align-middle'>
            Commencez dès maintenant à créer votre propre sondage en utilisant le double vote exclusif! Vous pouvez choisir entre un vote public ou un vote caché.
          </p>
          <br />
          <Link href="/lemanuel">
            <button className='p-4 bg-black text-lg text-white rounded-full mt-4'>Lire le manuel Le Choix Parfait et Vote Double</button>
          </Link>
        </div>
      </div>

      <div className='relative h-auto text-lg md:text-5xl mr-2 mt-8 ml-2 p-8 border-2 rounded-3xl border-black'>
        <strong>Qu&rsquo;est-ce que le Vote Double?</strong>
        <p className='text-base md:text-lg mt-8'>
          Le double vote est la véritable innovation introduite par cette méthode. Le double vote est composé de deux parties complémentaires et inextricablement liées.
        </p>
        <br />
        <p className='text-lg md:text-3xl'>Vous pouvez tester le bot Perfect Choice Telegram (Mode Bêta) sur le lien suivant :</p>
        <Link href="https://t.me/PerfectChoiceBot" target="_blank" className='block static border-2 border-blue-700 rounded-full mt-8 p-4 text-blue-700 hover:underline text-center'>PerfectChoiceBot 🤖</Link>
      </div>

      <hr/>

      <div className='block mt-12 text-center'>
        <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="lemanuel">Lire le manuel</Link>
        <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="auteur">Voir l&apos;équipe</Link>
        <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="don">Faire un don</Link>
      </div>

      <div className='block mt-8 mb-12 lg:mt-2 lg:mb-8 text-center'>
        <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://theperfectchoice.eu">theperfectchoice.eu</Link>
        <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://lasceltaperfetta.it">lasceltaperfetta.it</Link>
        <Link className="m-2 hover:underline text-2xl block lg:inline lg:text-md" href="https://laeleccionperfecta.es">laeleccionperfecta.es</Link>
      </div>
    </main>
  );
}
