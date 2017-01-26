CKEDITOR.editorConfig = function( config ) {
    config.toolbarGroups = [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'forms', groups: [ 'forms' ] },
        '/',
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'about', groups: [ 'about' ] },
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] }
    ];

    config.removeButtons = 'Save,NewPage,Preview,Print,Templates,Cut,Copy,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Blockquote,CreateDiv,Language,BidiRtl,BidiLtr,Anchor,Image,Flash,Smiley,PageBreak,Iframe,Format,Font,Styles,ShowBlocks,Maximize,About';

    config.width = '75%';
    config.display = 'inline-block;';
};