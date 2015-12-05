require '../../common/scripts/ui.js'
$ = require 'jquery'
Timeline = require '../../common/scripts/timeline-core.js'

$ ->
	timeline = new Timeline $ '#timeline'

	$ '#timeline > .read-more' .click ->
		$button = $ @
		$button.attr \disabled on
		$button.find \p .text 'Loading...'
		$.ajax "#{config.web-api-url}/posts/timeline" {
			data:
				limit: 10
				'max-cursor': $ '#timeline > .posts > .post:last-child' .attr \data-cursor
		} .done (posts) ->
			posts.for-each (post) ->
				timeline.add-last post
		.always ->
			$button.attr \disabled off
			$button.find \p .text 'Read more...?'

	socket = io.connect config.web-streaming-url + '/streaming/sites/mobile/home'

	$ \body .append $ '<p class="streaming-info"><i class="fa fa-spinner fa-spin"></i>ストリームに接続しています...</p>'

	socket.on \connect ->
		$ 'body > .streaming-info' .remove!
		$message = $ '<p class="streaming-info"><i class="fa fa-check"></i>ストリームに接続しました</p>'
		$ \body .append $message
		set-timeout ->
			$message.animate {
				opacity: 0
			} 200ms \linear ->
				$message.remove!
		, 1000ms

	socket.on \disconnect (client) ->
		if $ 'body > .streaming-info.reconnecting' .length == 0
			$ 'body > .streaming-info' .remove!
			$message = $ '<p class="streaming-info reconnecting"><i class="fa fa-spinner fa-spin"></i>ストリームから切断されました 再接続中...</p>'
			$ \body .append $message

	socket.on \post (post) ->
		timeline.add post
		$ '#timeline > .empty' .remove!

	$ '#misskey-header .post' .click ->
		text = window.prompt '新規投稿'
		if text? and text != ''
			$.ajax "#{config.web-api-url}/posts/status" {
				data: {text}
			} .done (post) ->
				#
			.fail (data) ->
				error = data.error
				switch error
				| \empty-text => window.alert 'テキストを入力してください。'
				| \too-long-text => window.alert 'テキストが長過ぎます。'
				| \duplicate-content => window.alert '投稿が重複しています。'
				| _ => window.alert "不明なエラー (#error-code)"
