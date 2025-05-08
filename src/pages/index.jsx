import CardFilme from "@/components/CardFilme";
import PageWrapper from "@/components/PageWrapper";

export default function Home(){
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[40px] pt-7 text-[#907cda] font-bold">Sua Coleção de Filmes</h1>
        <p className="text-[#8a898c] text-[20px]">Acompanhe seus filmes favoritos e adicione novos filmes a sua coleção</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center gap-2">
        <CardFilme/>
        
      
      </div>
    </PageWrapper>
  )
}