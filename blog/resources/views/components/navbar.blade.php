@props([
  'items' => [
    [
      'name' => 'Om oss',
      'url' => '/',
    ],
    [
      'name' => 'Tjenester',
      'url' => '/',
    ],
    [
      'name' => 'Kontakt',
      'url' => '/',
    ],
  ]
])

<nav class="bg-white shadow fixed top-0 left-0 w-full z-50">
    <div class=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                    <a href="{{ url('/') }}" class="text-black text-2xl font-bold">HTNBygg AS</a>
                </div>
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        @foreach ($items as $item)
                            <a href="{{ url($item['url']) }}"
                               class="text-black px-3 py-2 rounded-md text-base font-medium">{{ $item['name'] }}</a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>