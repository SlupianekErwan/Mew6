<section class="sec2">

<h1>{{$title}}</h1>

<div class="artists__victory flex">

@while ( $albums->have_posts()) @php $albums->the_post() @endphp

    <div class="artists">
              <div class="artists__music">
                {{the_post_thumbnail()}}
                <div class="artists__text">
                    <p><b>{{ the_terms(get_the_id(), 'artist') }}</b> {{the_title()}}</p>
                    <p class="artists__date">2021</p> 
                    <p>Hip hop, Electronic</p>
                </div>
              </div>
            </div>

@endwhile

</div>

<button class="artisits__disc"><b>{{$btn}}</b></button>

</section>