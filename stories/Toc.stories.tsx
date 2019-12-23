import React from "react"
import { TocProvider, Toc } from "../src/toc"
import { Flex, Box, Markdown, ContentSection } from "../src"

export default {
  component: Toc,
  title: "Toc"
}

const md1 = `
<Section name="Heading1">
# Heading 1
## Subheading 1.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.
</Section>
<Section name="Heading2">
# Heading 2
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Ac turpis egestas integer eget aliquet nibh praesent. Vel quam elementum pulvinar etiam non quam. Venenatis a condimentum vitae sapien pellentesque habitant. Elementum nibh tellus molestie nunc non blandit massa enim nec. Facilisis mauris sit amet massa vitae tortor condimentum. At quis risus sed vulputate odio ut. Varius morbi enim nunc faucibus a. Sagittis id consectetur purus ut faucibus. Consectetur a erat nam at lectus urna duis. Sed augue lacus viverra vitae congue eu consequat ac felis. Interdum posuere lorem ipsum dolor sit amet consectetur. In fermentum posuere urna nec tincidunt praesent semper feugiat. Mauris nunc congue nisi vitae suscipit tellus.

## Subheading 2.1
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.

## Subheading 2.2
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
</Section>
<Section name="Heading3">
# Heading 3
## Subheading 3.1
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.

## Subheading 3.2
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.

## Subheading 3.3
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
</Section>
<Section name="Heading4">
# Heading 4
## Subheading 4.1
Risus feugiat in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.

## Subheading 4.2
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.

## Subheading 4.3
At ultrices mi tempus imperdiet nulla. Nec dui nunc mattis enim ut tellus elementum sagittis. Enim facilisis gravida neque convallis a cras semper auctor. Donec adipiscing tristique risus nec. Et netus et malesuada fames ac. Duis convallis convallis tellus id interdum velit laoreet id. Amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae auctor eu. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Platea dictumst quisque sagittis purus sit. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Dui accumsan sit amet nulla facilisi.

## Subheading 4.4
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Risus **feugiat** in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
</Section>
<Section name="Heading5">
# Heading 5
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
Risus **feugiat** in ante metus dictum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Sed egestas egestas fringilla phasellus faucibus. Amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. At consectetur lorem donec massa sapien faucibus et molestie. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eu volutpat odio facilisis mauris sit amet. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar. Nibh venenatis cras sed felis eget velit aliquet sagittis. Nunc scelerisque viverra mauris in aliquam sem. Cursus risus at ultrices mi tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nunc eget lorem dolor sed viverra ipsum.
Et tortor consequat id porta nibh venenatis. Sem fringilla ut morbi tincidunt augue interdum velit. Lobortis scelerisque fermentum dui faucibus in ornare. Vehicula ipsum a arcu cursus vitae. Tristique senectus et netus et malesuada fames. Donec adipiscing tristique risus nec feugiat in. In metus vulputate eu scelerisque felis imperdiet proin. Sed tempus urna et pharetra pharetra. Maecenas pharetra convallis posuere morbi leo. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien et ligula ullamcorper malesuada. Dignissim suspendisse in est ante. Nunc sed blandit libero volutpat sed cras ornare. Urna molestie at elementum eu. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Mattis nunc sed blandit libero volutpat sed cras. Enim praesent elementum facilisis leo vel. Varius morbi enim nunc faucibus a pellentesque sit. Dolor sit amet consectetur adipiscing elit duis.
</Section>
`

export const tocFromContent = () => (
  <TocProvider>
    <Flex>
      <Box flexShrink={0} mx={2} width={5} position="sticky" top="0px" alignSelf="flex-start">
        <Toc />
      </Box>
      <Box>
        <Markdown>{md1}</Markdown>
      </Box>
    </Flex>
  </TocProvider>
)