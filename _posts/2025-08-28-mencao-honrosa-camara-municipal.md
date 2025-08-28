---
layout: default
title: "Grupo Tchóven é Homenageado na Câmara Municipal em Celebração aos 25 Anos de História"
date: 2025-08-28
description: "Em uma sessão solene, o Grupo Folclórico Ucraniano Tchóven recebeu uma Menção Honrosa da Câmara Municipal de São José dos Pinhais, proposta pelo Vereador Ton Rodrigues, em reconhecimento aos 25 anos de dedicação à cultura ucraniana."
image: /assets/img/mencao-honrosa-camara-sjp.jpg
---
<section class="py-16 md:py-24 bg-gradient-to-b from-[#081525] to-[#0d1a2b] text-white">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
            <!-- Título da Notícia -->
            <div class="text-center mb-10">
                <p class="text-sm text-[#FFD500] font-semibold">{{ page.date | date: "%d de %B de %Y" }}</p>
                <h1 class="text-3xl md:text-4xl font-bold mt-2">{{ page.title }}</h1>
            </div>

            <!-- Imagem de Destaque -->
            <div class="mb-10 rounded-lg overflow-hidden custom-shadow">
                <img src="{{ page.image | relative_url }}" alt="{{ page.title }}" class="w-full h-auto object-cover">
            </div>

            <!-- Conteúdo da Notícia -->
            <div class="prose prose-invert lg:prose-xl max-w-none text-lg text-gray-300 text-justify space-y-6">
                <p class="lead">Nesta quinta-feira, 28 de agosto, o Grupo Folclórico Ucraniano Tchóven viveu um momento de grande orgulho e reconhecimento. Em uma sessão solene na <strong>Câmara Municipal de São José dos Pinhais</strong>, recebemos uma Menção Honrosa em celebração ao nosso aniversário de 25 anos.</p>
                
                <p>A homenagem, uma iniciativa do <strong>Vereador Ton Rodrigues</strong>, celebra a trajetória de um quarto de século do nosso grupo, destacando a importância da nossa dedicação à preservação, valorização e divulgação da rica cultura ucraniana em nosso município e região.</p>

                <p>Representantes do grupo, incluindo dançarinos de diversas gerações, estiveram presentes na sessão para receber o certificado. A emoção era visível nos rostos de nossos membros, especialmente das crianças, que representam o futuro e a continuidade de nossas tradições. Este momento simboliza não apenas o nosso passado de lutas e conquistas, mas também a força da nossa comunidade.</p>
                
                <p>Em nome de toda a diretoria, dançarinos e familiares, expressamos nossa mais profunda gratidão ao Vereador Ton Rodrigues pela proposição e a todos os vereadores da Câmara Municipal por aprovarem esta honraria. Este reconhecimento nos enche de força e motivação para continuar nossa jornada, levando a beleza da dança e dos costumes ucranianos para todos os palcos. Que este marco seja um impulso para os próximos 25 anos de história!</p>
            </div>

            <!-- Voltar para Notícias -->
            <div class="text-center mt-16">
                <a href="{{ '/noticias/' | relative_url }}" class="inline-flex items-center gap-2 px-6 py-2 border-2 border-[#FFD500] text-[#FFD500] rounded-full font-medium hover:bg-[#FFD500]/10 transition">
                    <i class="fas fa-arrow-left"></i>
                    Ver Todas as Notícias
                </a>
            </div>
        </div>
    </div>
</section>