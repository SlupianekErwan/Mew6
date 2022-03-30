
<p>Hello {{$title}}</p>

@while ( $musics->have_posts()) @php $musics->the_post() @endphp

    @php(the_title())

@endwhile

