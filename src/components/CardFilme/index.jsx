export default function CardFilme(){
    return(
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] roundend-t-lg">
                <img
                    className="w-full h-full rounded-t-lg object-cover"
                    src="https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/a-viagem-de-chihiro-netflix.jpg?fit=512%2C288&ssl=1"
                    alt=""
                 />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="font-bold text-[15px]">A Viagem de Chihiro</p>
                <p className="text-[15px] text-[#8a898c]">Hayao Miyazaki</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">2001</p>
                    <div className="px-2 py-0 bg-[#8f7bd8]/10 text-[#8f7db8] rounded-lg">Aventura</div>
                </div>
            </div>
        </div>
    ) 
}