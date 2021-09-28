import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import {Schema, DOMParser} from "prosemirror-model"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import collab from "prosemirror-collab"
import { exampleSetup } from "prosemirror-example-setup"
import { defaultMarkdownParser, defaultMarkdownSerializer } from "prosemirror-markdown"

import { CollabService } from 'src/app/api/collab.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild("content", { read: ElementRef, static: false }) contentElement: ElementRef;
  @ViewChild("editor", { read: ElementRef, static: false }) editor: ElementRef;

  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  constructor(private _c: CollabService) { }

  ngOnInit() {
    this._c.get().subscribe(resp => {
      console.log(resp)

      // const mySchema = new Schema({
    //   nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
    //   marks: schema.spec.marks
    // })

      let view = new EditorView(this.editor.nativeElement, {
        state: EditorState.create({
          //doc: DOMParser.fromSchema(mySchema).parse(this.contentElement.nativeElement),
          doc: defaultMarkdownParser.parse('Hello World'),
          plugins: exampleSetup({ schema })
        }),

        // dispatchTransaction: transaction => {
        //   let newState = view.state.apply(transaction)
        //   view.updateState(newState);
        //   this.content = defaultMarkdownSerializer.serialize(view.state.doc);
        //   this.contentChange.emit(this.content);
        // }
      });

    })
  }
}
