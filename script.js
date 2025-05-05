// script.js
require.config({ 
  paths: { 
    'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' 
  }
});

require(['vs/editor/editor.main'], function () {
  monaco.editor.create(document.getElementById('editorContainer'), {
    value: `local name = game:GetService("Players").LocalPlayer.Name

local function greet()
    print("Welcome to Arques, "..name.."!")
    printidentity()
end

greet()`,
    language: 'lua',
    theme: 'vs-dark',
    fontSize: 14,
    minimap: { enabled: false },
    automaticLayout: true
  });
});
